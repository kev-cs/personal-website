import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector", function() {

  const supportedLanguages = ["en", "fr", "other"];
  let changeLanguageMock: jest.Mock;

  let sut: RenderResult;

  beforeEach(() => {
    changeLanguageMock = jest.fn();
    sut = render(
      <LanguageSelector
        changeLanguage={changeLanguageMock}
        supportedLanguages={supportedLanguages}
      />);
  });

  it("initially has no language options visible", () => {
    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeNull();
    });
  });

  it("shows available language options when it is clicked", () => {
    sut.getByTestId("toggle-show-languages").click();

    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeVisible();
    });
  });

  it("hides options when it is clicked if options were shown", () => {
    sut.getByTestId("toggle-show-languages").click();
    sut.getByTestId("toggle-show-languages").click();

    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeNull();
    });
  });

  it("hides options when a language is chosen", () => {
    sut.getByTestId("toggle-show-languages").click();
    sut.queryByText(supportedLanguages[0]).click();

    expect(sut.queryByText(supportedLanguages[0])).toBeNull();
  });

  it("changes language when a language is chosen", () => {
    sut.getByTestId("toggle-show-languages").click();
    sut.queryByText(supportedLanguages[0]).click();

    expect(changeLanguageMock.mock.calls[0][0]).toBe(supportedLanguages[0]);
  });

});


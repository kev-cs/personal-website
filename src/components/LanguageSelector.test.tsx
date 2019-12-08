import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
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

  function clickOnToggleLanguagesOptionsIcon() {
    fireEvent(
      sut.getByTestId("toggle-show-languages"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
  }

  it("initially has no language options visible", () => {
    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeNull();
    });
  });

  it("shows available language options when it is clicked", () => {
    clickOnToggleLanguagesOptionsIcon();

    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeVisible();
    });
  });

  it("hides options when it is clicked if options were shown", () => {
    clickOnToggleLanguagesOptionsIcon();
    clickOnToggleLanguagesOptionsIcon();

    supportedLanguages.forEach(val => {
      expect(sut.queryByText(val)).toBeNull();
    });
  });

  it("hides options when a language is chosen", () => {
    clickOnToggleLanguagesOptionsIcon();
    sut.queryByText(supportedLanguages[0]).click();

    expect(sut.queryByText(supportedLanguages[0])).toBeNull();
  });

  it("changes language when a language is chosen", () => {
    clickOnToggleLanguagesOptionsIcon();
    sut.queryByText(supportedLanguages[0]).click();

    expect(changeLanguageMock.mock.calls[0][0]).toBe(supportedLanguages[0]);
  });

});


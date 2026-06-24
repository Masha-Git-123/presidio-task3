import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import AddEntryForm from "./AddEntryForm";

describe("Form Validation", () => {

  it(
    "shows validation errors",
    async () => {

      render(<AddEntryForm />);

      const button =
        screen.getByRole(
          "button",
          { name: /add/i }
        );

      await userEvent.click(button);

      expect(
        screen.getByText(
          /title must be at least 3/i
        )
      ).toBeInTheDocument();

    }
  );

});
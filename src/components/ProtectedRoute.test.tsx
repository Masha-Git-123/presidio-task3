import { MemoryRouter }
from "react-router-dom";

import { render }
from "@testing-library/react";

import ProtectedRoute
from "./ProtectedRoute";

import { describe, it } from "vitest";

describe(
  "Protected Route",
  () => {

  it(
    "redirects without token",
    () => {

      localStorage.removeItem(
        "token"
      );

      render(
        <MemoryRouter>

          <ProtectedRoute>

            <div>
              Dashboard
            </div>

          </ProtectedRoute>

        </MemoryRouter>
      );

    }
  );
});
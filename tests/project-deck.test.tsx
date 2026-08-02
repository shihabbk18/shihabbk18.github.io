import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ProjectDeck } from "@/components/project-deck";
import { projects } from "@/data/projects";

describe("ProjectDeck", () => {
  it("renders every project in the stack", () => {
    render(<ProjectDeck />);

    projects.forEach((project) => {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    });
  });

  it("brings a selected background card to the front", async () => {
    const user = userEvent.setup();
    render(<ProjectDeck />);

    await user.click(
      screen.getByRole("button", {
        name: "Bring Explainable Mango Ripeness Classification to front",
      }),
    );

    await waitFor(() => expect(screen.getByText("Active study / 02")).toBeInTheDocument());
    expect(screen.getByText("02 / 03")).toBeInTheDocument();
  });

  it("supports previous and next controls", async () => {
    const user = userEvent.setup();
    render(<ProjectDeck />);

    await user.click(screen.getByRole("button", { name: "Show next project" }));
    expect(screen.getByText("02 / 03")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show previous project" }));
    expect(screen.getByText("01 / 03")).toBeInTheDocument();
  });

  it("changes the active project with arrow keys", () => {
    render(<ProjectDeck />);
    const region = screen.getByRole("region", { name: "Featured projects" });

    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(screen.getByText("02 / 03")).toBeInTheDocument();

    fireEvent.keyDown(region, { key: "ArrowLeft" });
    expect(screen.getByText("01 / 03")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Navigation } from "@/components/navigation";
import { navigationItems } from "@/data/portfolio";

describe("Navigation", () => {
  it("opens and closes the mobile menu after a selection", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navigation />
        <main>{navigationItems.map((item) => <section id={item.section} key={item.section} />)}</main>
      </>,
    );

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("link", { name: "About" }));
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("points every internal navigation link to an existing section", () => {
    render(
      <>
        <Navigation />
        <main>{navigationItems.map((item) => <section id={item.section} key={item.section} />)}</main>
      </>,
    );

    navigationItems.forEach((item) => {
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.href);
      expect(document.querySelector(item.href)).toBeInTheDocument();
    });
  });
});

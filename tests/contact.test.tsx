import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Contact } from "@/components/contact";

describe("Contact", () => {
  it("validates all required fields", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: "Create email" }));

    expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please add a short message.")).toBeInTheDocument();
  });

  it("rejects an invalid email address", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Name"), "Research collaborator");
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.type(screen.getByLabelText("Message"), "I would like to discuss a project.");
    await user.click(screen.getByRole("button", { name: "Create email" }));

    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
  });
});

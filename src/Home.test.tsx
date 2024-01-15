import { it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { Footer } from "./Footer";

it("Home Rendered", async () => {
  render(<Home />);
  await screen.findByRole("heading", { name: "Home", level: 1 });
});

it("Footer Rendered", async () => {
  render(<Footer />);
  await screen.findByRole("heading", { name: "Footer", level: 5 });
});

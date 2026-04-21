import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "brand", "secondary", "ghost", "danger", "outline"],
      description: "Variante visual del botón",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Tamaño del botón",
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Continuar" },
};

export const Brand: Story = {
  args: { variant: "brand", children: "Confirmar pedido" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancelar" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ver detalles" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Eliminar" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Editar" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { variant: "primary", children: "No disponible", disabled: true },
};

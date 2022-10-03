import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export const ContactForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
      </form>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Name"
          placeholder="Taro Yamada"
          {...form.getInputProps("email")}
        />
      </form>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Your message"
          placeholder="I want to order your goods"
          {...form.getInputProps("email")}
        />
      </form>
    </Box>
  );
};

"use client";
import { Text } from "@/components/ui/text";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const items = [
  {
    id: "perfume",
    label: "Perfume",
  },
  {
    id: "trousers",
    label: "Trousers",
  },
  {
    id: "shoe",
    label: "Shoe",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "handbag",
    label: "Handbag",
  },
  {
    id: "hat",
    label: "Hat",
  },
] as const;

type ItemId = (typeof items)[number]["id"];

// 2. Define form schema type
type FormValues = {
  items: ItemId[];
};

function CategoriesFilter() {
  // 3. Pass form type to useForm
  const form = useForm<FormValues>({
    defaultValues: {
      items: [],
    },
  });

  function onChange(data: FormValues) {
    console.log(JSON.stringify(data, null, 2));
  }
  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onChange)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-3">
                <FormLabel className="text-base">Categories</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex space-x-3 space-y-0 py-3 items-center border-b-[0.3px]"
                      >
                        <FormControl>
                          <Checkbox
                            className="border-[#E6E7E8] rounded-xs"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel>
                          <Text variant="body-1">{item.label}</Text>
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CategoriesFilter;

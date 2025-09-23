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
import { useCategories } from "@/Hooks/useCategories";

type Props = {
  onChange: (selected: string[]) => void;
  urlCategories: string[];
};

type Category = {
  id: number;
  name: string;
};

type FormValues = {
  items: string[];
};

function CategoriesFilter({ onChange, urlCategories }: Props) {
  const { data: categories = [] } = useCategories();

  // 1. Set default values from URL (strings)
  const form = useForm<FormValues>({
    defaultValues: {
      items: urlCategories ?? [],
    },
  });

  // 2. Pass data up on form change
  function handleChange(data: FormValues) {
    onChange(data.items);
  }

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(handleChange)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-3">
                <FormLabel className="text-base">Categories</FormLabel>
              </div>
              {categories.map((category: Category) => {
                return (
                  <FormField
                    key={category.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => (
                      <FormItem
                        key={category.id}
                        className="flex space-x-3 space-y-0 py-3 items-center border-b-[0.3px]"
                      >
                        <FormControl>
                          <Checkbox
                            className="border-[#E6E7E8] rounded-xs"
                            checked={field.value?.includes(category.name)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...field.value,
                                    category.name,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== category.name
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel>
                          <Text variant="body-1">{category.name}</Text>
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                );
              })}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CategoriesFilter;

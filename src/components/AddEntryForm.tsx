import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver }
from "@hookform/resolvers/zod";

import { useEntryStore }
from "../store/entryStore";

const schema = z.object({

  title: z
    .string()
    .min(
      3,
      "Title must be at least 3 characters"
    ),

  amount: z
    .number()
    .min(
      1,
      "Amount must be greater than 0"
    ),
});

type FormData =
  z.infer<typeof schema>;

export default function AddEntryForm() {

  const addEntry =
    useEntryStore(
      (state) => state.addEntry
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } =
    useForm<FormData>({
      resolver:
        zodResolver(schema),
    });

  const onSubmit = (
    data: FormData
  ) => {

    addEntry(data);
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
    >

      <input
        placeholder="Title"
        {...register("title")}
      />

      <p>
        {errors.title?.message}
      </p>

      <input
        type="number"
        placeholder="Amount"
        {...register(
          "amount",
          {
            valueAsNumber: true,
          }
        )}
      />

      <p>
        {errors.amount?.message}
      </p>

      <button type="submit">
        Add
      </button>

    </form>
  );
}
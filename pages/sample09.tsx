import { useForm } from "react-hook-form";

type FormValue = {
  name: string;
};

export default function Sample09() {
  const { register, handleSubmit } = useForm<FormValue>();

  return (
    <form
      onSubmit={handleSubmit((e) => {
        alert(e.name);
      })}
    >
      <input {...register("name")} />
      <input type="submit" />
    </form>
  );
}

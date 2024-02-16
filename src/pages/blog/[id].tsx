import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id: number[] = [0, 1, 2, 3];

  return (
    <p>
      {router.query.id === String(id[1]) ? (
        <h1>Post: {id[1]}</h1>
      ) : (
        "You don't have access to this page"
      )}
    </p>
  );
}

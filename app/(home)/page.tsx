"use client"
import {useRouter} from "next/navigation";
import {Button} from "@mui/material";

export default function Home() {
    const router = useRouter();

  return (
      <Button
          variant="contained"
          onClick={() => router.push("/level1")}
      >
          Start Game
      </Button>
  );
}

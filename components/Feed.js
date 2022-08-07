import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <main className="">
      <section className="">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section className="">
        {/* mini profile */}
        {/* sugestions */}
      </section>
    </main>
  );
}

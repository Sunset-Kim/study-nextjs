import { useRouter } from "next/router";

function PortfolioProject() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Project page</h1>
    </div>
  );
}

export default PortfolioProject;

import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  console.log(props.data);

  if (!props.data) {
    return <p>아직</p>;
  }
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const pid = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const file = await fs.readFile(filePath);
  const data = JSON.parse(file);

  return {
    props: {
      data: data.products.find((item) => item.id == pid),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],
    fallback: "blocking", // 포함되지 않은 path도 방문시에 생성한다
  };
}

export default ProductDetailPage;

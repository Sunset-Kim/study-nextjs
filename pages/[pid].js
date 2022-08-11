import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  console.log(props.data);
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
    paths: [{ params: { pid: "p1" } }, { params: { pid: "p2" } }, { params: { pid: "p3" } }],
    fallback: false,
  };
}

export default ProductDetailPage;

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

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const data = await getData();
  const { params } = context;
  const { pid } = params;

  return {
    props: {
      data: data.products.find((item) => item.id == pid),
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((item) => item.id);
  const params = ids.map((id) => ({
    params: { pid: id },
  }));

  return {
    paths: params,
    fallback: false, // 포함되지 않은 path도 방문시에 생성한다
  };
}

export default ProductDetailPage;

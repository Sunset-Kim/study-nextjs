function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;
  console.log("이건 서버사이드에서 실행됩니다");
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}

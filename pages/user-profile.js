function UserProfilePage(props) {
  console.log(props);
  return <h1>Max</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { req, res, params } = context;
  console.log("-----req :", req);
  console.log("-----res :", res);
  return {
    props: {
      username: "Max",
    },
  };
}

import { useRouter } from "next/router";

function EventsDetailPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>여기서는 디테일한 이벤트 정보를 동적으로 보여줍니다</h1>
    </div>
  );
}

export default EventsDetailPage;

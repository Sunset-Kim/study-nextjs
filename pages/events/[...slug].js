import { useRouter } from "next/router";

function EventsFilteredPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>여기는 이벤트의 필터링된 목록을 보여준다</h1>
    </div>
  );
}

export default EventsFilteredPage;

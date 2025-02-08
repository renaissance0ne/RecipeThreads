import { fetchUserReplies } from "@/lib/actions/user.actions";
import ThreadCard from "../cards/ThreadCard";

interface Reply {
  _id: string;
  text: string;
  parentId: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  children: {
    author: {
      image: string;
    };
  }[];
}

interface Props {
  currentUserId: string;
  accountId: string;
}

async function RepliesTab({ currentUserId, accountId }: Props) {
  const result = await fetchUserReplies(accountId);

  if (!result) return null;

  return (
    <section className='mt-9 flex flex-col gap-10'>
      {result.replies.map((reply: any) => (
        <ThreadCard
          key={reply._id}
          id={reply._id}
          currentUserId={currentUserId}
          parentId={reply.parentId}
          content={reply.text}
          author={{
            name: result.name,
            image: result.image,
            id: result.id
          }}
          community={reply.community}
          createdAt={reply.createdAt}
          comments={reply.children}
          isComment={true}
        />
      ))}
    </section>
  );
}

export default RepliesTab;

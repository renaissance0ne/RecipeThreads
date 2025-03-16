import { fetchThreadById } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Comment from "@/components/forms/Comment";
import ThreadCard from "@/components/cards/ThreadCard"; 
import { fetchUser } from "@/lib/actions/user.actions";

export const revalidate = 0;

export default async function Page(props: { params: { id: string } }) {
  const params = await Promise.resolve(props.params);
  const { id } = params;
  if (!id) return null;
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Fetch the thread
  const threadData = await fetchThreadById(id);
  
  // Serialize the thread to avoid non-serializable properties
  const thread = JSON.parse(JSON.stringify(threadData));

  return (
    <section className="relative">
      <div>
        <ThreadCard
          id={thread._id}
          currentUserId={user.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
          likes={Array.isArray(thread.likes) ? thread.likes : []}
        />
      </div>

      <div className="mt-7">
        <Comment
          threadId={id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((childItem: any) => (
          <ThreadCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={user.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children || []}
            isComment
            likes={Array.isArray(childItem.likes) ? childItem.likes : []}
          />
        ))}
      </div>
    </section>
  );
}
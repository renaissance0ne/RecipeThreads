// lib/utils/thread.utils.ts
export function serializeThread(thread: any) {
    if (!thread) return null;
    
    // Basic serialization
    const serialized = {
      _id: thread._id.toString(),
      text: thread.text,
      author: thread.author ? {
        _id: thread.author._id?.toString(),
        id: thread.author.id,
        name: thread.author.name,
        image: thread.author.image
      } : null,
      community: thread.community ? {
        _id: thread.community._id?.toString(),
        id: thread.community.id,
        name: thread.community.name,
        image: thread.community.image
      } : null,
      createdAt: thread.createdAt?.toISOString() || new Date().toISOString(),
      parentId: thread.parentId,
      children: thread.children?.map((child: any) => serializeThread(child)) || [],
      likes: Array.isArray(thread.likes) ? thread.likes : []
    };
    
    return serialized;
  }
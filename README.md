## TL;DR

A blog platform with commenting, rating/ voting feature and with a social ranking approval feature that gives users powers when certain roles are achieved.
[Live Site](https://www.example.com)

## Technologies

`React.js`, `Node.js`, `Express.js`,`Mongo db`, `Mongoose`, `Redux`.

Allows anyone to post a blog, the lower your role the higher approval is needed.

---

### Roles.

- **Viewer**: default when signing up, allowed to write but don't immediately show. Can vote (no consequence).
- **Deputy**: allowed to write, needs one approval from any higher class to get blog shown. Can vote. 3 approvals.
- **Sherif**: allowed to write, immediately gets published. Can vote. 1 approval
- **Admin**: can write, remove any lower role user (demote?)
- **SuperAdmin**: can write and remove anyone.

## Posts.

- Get a number of posts.
- Get popular (by vote) posts.
- Get to be approved posts (back end).
- Submitted or drafts
  -- Drafts any admin can see and the user who wrote it.
  -- Submitted posts show up for deputies and higher to vouch for.
- Delete post by ID
- Get a post by ID
- Get a collection of posts (Staff-picked posts etc.)
- Update a post (writer or admin only).
- Unpublish a post (admin only).
- Staff pick a post (future) (admin only)

## Comments.

- Delete a post comment
- Create a post comment
- Can comment multiple times

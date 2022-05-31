import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RTCEditor from './RTCEditor';

type Props = {
  post: {
    _id: String;
    user: String;
    title: String;
    thumbnail: String;
    excerpt: String;
    categories: [String];
    sections: [
      {
        template?: String;
        content?: String;

        heading?: String;
        caption?: String;
        media?: String;
      }
    ];
    comments: [];
    numComments: Number;
    votes: [];
    numVotes: Number;
    averageRating: Number;
    isPublished: true;
    isSubmitted: true;
    submittedAt: String;
    approver: String;
    approveDate: String;
    isApproved: true;
    createdAt: String;
    updatedAt: String;
  };
};

function TextPostEditor({ post }: Props) {
  const [sections, setSections] = useState(Array.from(post.sections));
  console.log(sections);

  return (
    <Container fluid>
      {sections.map((section, i) =>
        section.template === 'rtc' ? (
          <RTCEditor key={i} content={section.content} />
        ) : null
      )}
    </Container>
  );
}

export default TextPostEditor;

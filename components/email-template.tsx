import type * as React from "react";

interface EmailTemplateProps {
  entry: {
    created_by: string;
    entry: string;
  };
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ entry }) => (
  <div>
    <h1>A new submission was made!</h1>
    <p>
      <strong>Name:</strong> {entry.created_by}
    </p>
    <p>
      <strong>Email:</strong> {entry.entry}
    </p>
  </div>
);

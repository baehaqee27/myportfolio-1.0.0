import * as React from "react";

interface EmailTemplateProps {
  nama: string;
  email: string;
  pesan: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nama,
  email,
  pesan,
}) => (
  <div>
    <h1>Pesan Baru dari Portfolio!</h1>
    <p>
      <strong>Dari:</strong> {nama} ({email})
    </p>
    <hr />
    <p>
      <strong>Pesan:</strong>
    </p>
    <p style={{ whiteSpace: "pre-wrap" }}>{pesan}</p>
    <hr />
    <p>
      <em>Email ini dikirim dari formulir kontak website portfolio Anda.</em>
    </p>
  </div>
);

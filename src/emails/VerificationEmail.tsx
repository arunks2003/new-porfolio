import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  message: string;
  name: string;
  email: string;
}

export default function VerificationEmail({
  message,
  name,
  email,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>New message from {name}</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>{`New message from ${name}: ${message.slice(0, 45)}...`}</Preview>

      <Section>
        <Row>
          <Heading as="h2">You've received a new message</Heading>
        </Row>

        <Row>
          <Text>
            <strong>From:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
        </Row>

        <Row>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text>{message}</Text>
        </Row>

        <Row>
          <Text style={{ color: "gray", fontSize: "12px" }}>
            If you didn’t expect this message, you can safely ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}

import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";

export default function Footer() {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Designed and Created by{" "}
        <a
          style={{ color: "#FF1A75" }}
          href="https://pranavgoswami.netlify.com">
          Pranav Goswami
        </a>
      </div>
      <div className="flex items-center justify-between mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
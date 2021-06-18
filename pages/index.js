import { Heading } from '@learn-bit-react/base-ui.ui.heading';
import { Button } from '@learn-bit-react/base-ui.ui.button';
// import { HomePage } from '@learn-bit-react/shoe-store.ui.pages.home-shoes';
import { Header } from '@learn-bit-react/ecommerce.ui.header';
export default function Home() {
  return (
    <div>
      <Header />
      <Heading>Hello</Heading>
      <Button buttonText="click" />
      {/* <HomePage /> */}
    </div>
  );
}

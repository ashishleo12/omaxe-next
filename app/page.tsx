import Home from "./Home";
import ContactButtons from './components/ContactButtons';
import EnquiryForm from './components/EnquiryModal'

export default function Page() {
  return (
    <div>
      <EnquiryForm />
      <Home />
      <ContactButtons/>
    </div>
  )
}
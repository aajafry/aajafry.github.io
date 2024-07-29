import Button from "../atoms/Button";
import FormGroup from "../atoms/FormGroup";

export default function ContractForm({ classes }) {
  return (
    <div className={classes}>
      <form action="" method="post" className="capitalize">
        <FormGroup
          field="input"
          label="your name"
          type="text"
          name="contractName"
          id="contractName"
          placeholder="enter your contract name"
          required
        />
        <FormGroup
          field="input"
          label="phone number"
          type="tel"
          name="contractPhone"
          id="contractPhone"
          placeholder="enter your phone number"
          required
        />
        <FormGroup
          field="input"
          label="email"
          type="email"
          name="contractEmail"
          id="contractEmail"
          placeholder="enter your email address"
          required
        />
        <FormGroup
          field="input"
          label="subject"
          type="text"
          name="contractSubject"
          id="contractSubject"
          placeholder="enter your subject"
          required
        />
        <FormGroup
          field="textarea"
          label="message"
          name="contractMessage"
          id="contractMessage"
          placeholder="enter your message"
          required
        />
        <Button
          type="submit"
          label="send message"
          classes="w-full text-rose-500 border-[1px] font-light rounded shadow hover:shadow-md hover:bg-rose-500 hover:text-white px-4 py-3 outline-none capitalize tracking-wider text-nowrap text-lg transition-all"
        />
      </form>
    </div>
  );
}

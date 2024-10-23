import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is copytrading?",
      answer: "Copytrading is a form of social trading where you automatically copy the trades of experienced traders. With TradewithChun, you can mirror the strategies of our expert traders on the Exness platform, potentially benefiting from their knowledge and experience."
    },
    {
      question: "How does TradewithChun ensure the safety of my investments?",
      answer: "We prioritize the safety of your investments through advanced risk management techniques, diversified trading strategies, and strict monitoring of our expert traders. Additionally, we operate on the Exness platform, which is known for its robust security measures and regulatory compliance."
    },
    {
      question: "What are the fees for using TradewithChun's services?",
      answer: "Our fee structure is transparent and competitive. We charge a small percentage of the profits generated from successful trades. This aligns our interests with yours, as we only profit when you do. Detailed fee information is provided upon account registration."
    },
    {
      question: "Can I customize my copytrading settings?",
      answer: "Yes, TradewithChun offers flexible copytrading options. You can set your risk tolerance levels, and adjust your investment amount. Our platform allows you to tailor your copytrading experience to your individual preferences and goals."
    },
    {
      question: "How can I get started with TradewithChun?",
      answer: "Getting started is easy! Simply sign up for an account on our website, complete the verification process, and fund your account. Our user-friendly interface and detailed guides will walk you through each step of the process."
    }
  ];
  
  const FAQ = () => {
    return (
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQ;
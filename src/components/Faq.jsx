import React, { useState } from 'react';
import styled from 'styled-components';

/* ================= FAQ DATA ================= */

const faqs = [
  {
    question: "What types of programs does the fellowship offer?",
    answer:
      "We offer a variety of programs including emotional and mental health support, holistic health and wellness initiatives, spiritual guidance, career and financial education, marital and relationship counseling, personal development workshops, and community building efforts.",
  },
  {
    question: "How can I join the fellowship?",
    answer:
      "You can join the fellowship by attending our events, meetings and participating in our programs. You can contact us through the contact page and other provided methods on this website for more information.",
  },
  {
    question: "Do I need to be a member of a specific denomination to join?",
    answer:
      "No, we are an interdenominational fellowship welcoming women from all faith backgrounds to participate in our programs and events.",
  },
  {
    question: "How can I volunteer or get involved?",
    answer:
      "You can volunteer or get involved by visiting our Get Involved page, where you'll find information on current volunteer opportunities and ways to support our mission.",
  },
  {
    question: "What if I need personal counseling or support?",
    answer:
      "If you need personal counseling or support, please contact us through the Contact Us page. We offer various counseling services and can connect you with the appropriate resources.",
  },
  {
    question: "How can I stay updated on fellowship news and events?",
    answer:
      "You can stay updated by subscribing to our newsletter through the signup form on our Home page. We also regularly update our Events and Blog pages with the latest information.",
  },
];

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FaqItem = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const QuestionButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 22px 28px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #4a148c;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  font-size: 1.6rem;
  line-height: 1;
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const AnswerWrapper = styled.div`
  max-height: ${({ open }) => (open ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

const Answer = styled.p`
  padding: 0 28px 25px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #444;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

/* ================= COMPONENT ================= */

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <FaqItem key={index}>
              <QuestionButton
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <Icon open={isOpen}>+</Icon>
              </QuestionButton>

              <AnswerWrapper open={isOpen}>
                <Answer open={isOpen}>{faq.answer}</Answer>
              </AnswerWrapper>
            </FaqItem>
          );
        })}
      </Container>
    </Section>
  );
};

export default Faq;

import Image from "next/image";

const ChatBot = () => {
  return (
    <button className="fixed bottom-5 md:bottom-10 transition-all duration-300 hover:scale-105 right-5 md:right-10 bg-white bot-shadow size-[60px] md:size-[70px] myFlex justify-center z-[20000] rounded-full">
      <Image src="/images/chatbot.svg" width={40} height={43} alt="Chat Icon" />
    </button>
  );
};

export default ChatBot;

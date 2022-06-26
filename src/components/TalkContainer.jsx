import React from "react";
import Talk from "./Talk";

const TalkContainer = ({
  talks,
  header,
  userTheme,
  onTalkEnter,
  onTalkLeave,
}) => {
  const rightTalk = [];
  const leftTalk = [];

  for (let i = 0; i < talks.length; i++) {
    if (i % 2 === 1) {
      rightTalk.push(talks[i]);
    } else {
      leftTalk.push(talks[i]);
    }
  }
  return (
    <div>
      <p className="font-bold text-sm mb-2 mt-10 dark:text-dim-body">
        {header}
      </p>

      <div className="lg:flex lg:w-[650px]">
        <div className="w-full lg:w-1/2 mr-2">
          {leftTalk.map((talk) => (
            <Talk
              talk={talk}
              userTheme={userTheme}
              key={talk.fields.Number}
              onTalkEnter={onTalkEnter}
              onTalkLeave={onTalkLeave}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/2 lg:mt-6">
          {rightTalk.map((talk) => (
            <Talk
              talk={talk}
              userTheme={userTheme}
              key={talk.fields.Number}
              onTalkEnter={onTalkEnter}
              onTalkLeave={onTalkLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkContainer;

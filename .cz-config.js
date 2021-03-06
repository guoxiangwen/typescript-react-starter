"use strict";

module.exports = {
  types: [
    { value: "feat", name: "â¨ feat:     A new feature" },
    { value: "fix", name: "ð fix:      A bug fix" },
    { value: "docs", name: "ð docs:     Documentation only changes" },
    {
      value: "style",
      name: "ð style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
    },
    {
      value: "refactor",
      name: "ð  refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "perf",
      name: "perf:  A code change that improves performance",
    },
    { value: "test", name: "ð test:     Adding missing tests" },
    {
      value: "chore",
      name: "ð chore: Changes to the build process or auxiliary tools and libraries such as documentation generation",
    },
    { value: "revert", name: "âª revert:   Revert to a commit" },
    { value: "wip", name: "ðª wip:      Work in progress" },
  ],
  // types: [
  //   {
  //     value: 'WIP',
  //     name: 'ðª  WIP:      åè½æªå¼åå®æ,å¾å¼åä¸­',
  //   },
  //   {
  //     value: 'åè½',
  //     name: 'â¨  åè½:     æ·»å æ°çåè½',
  //   },
  //   {
  //     value: 'ä¿®å¤',
  //     name: 'ð  ä¿®å¤:     ä¿®å¤ä¸ä¸ªæå¤ä¸ªBug',
  //   },
  //   {
  //     value: 'éæ',
  //     name: 'ð   éæ:      éæä¸ä¸ªåè½,ä¸å¡æ¨¡å',
  //   },
  //   {
  //     value: 'ææ¡£',
  //     name: 'ð  ææ¡£:     ææ¡£åæ´',
  //   },
  //   {
  //     value: 'æµè¯',
  //     name: 'ð   æµè¯:     æ°å æµè¯ç¨ä¾,ææ´æ¹å·²ææµè¯',
  //   },
  //   {
  //     value: 'å·¥å·',
  //     name: 'ð¯  å·¥å·:    å¼åå·¥å·åå¨,æå»ºèæ¬,èææ¶çåçº§ç­',
  //   },
  //   {
  //     value: 'ä»£ç æ ¼å¼',
  //     name: 'ð  ä»£ç æ ¼å¼:    ä»£ç é£æ ¼æ´æ¹(ç©ºæ ¼,åå·ç­)',
  //   },
  //   {
  //     value: 'åæ»',
  //     name: 'âª  åæ»:   ä»£ç åæ»å°æä¸ªçæ¬',
  //   },
  // ],
  messages: {
    type: "éæ©ä¸ç§ä½ çæäº¤ç±»å:",
    scope: "éæ©ä¸ä¸ªscope (å¯é):",
    // used if allowCustomScopes is true
    customScope: "è¡¨ç¤ºæ­¤æ¬¡æ´æ¹çèå´(å¯é):",
    subject: "ç­è¯´æ(ä¸»ä½)(å¯é):\n",
    body: 'é¿è¯´æ,ä½¿ç¨"|"æ¢è¡(å¯é)ï¼\n',
    breaking: "éå¼å®¹æ§è¯´æ (å¯é):\n",
    footer: "å³èå³é­çissue bugï¼ä¾å¦ï¼#31, #34(å¯é):\n",
    confirmCommit: "ç¡®å®æäº¤è¯´æ?",
  },
  scopes: [
    {
      name: "ä¸å¡æ¨¡å1",
    },
    {
      name: "ä¸å¡æ¨¡å2",
    },
    {
      name: "ä¸å¡æ¨¡å3",
    },
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // limit subject length
  subjectLimit: 100,
};

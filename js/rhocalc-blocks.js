// TODO: how to import JSON asset?
export const rhoCalcBlocks = [
  {
    type: "proc_new",
    message0: "new %1 in %2",
    args0: [
      {
        type: "field_variable",
        name: "NAME",
        variable: "x",
      },
      {
        type: "input_value",
        name: "NAME",
        check: "proc",
      },
    ],
    colour: 180,
    output: "proc",
    tooltip: "introduce a new channel for use in process P",
    helpUrl: "",
  },
  {
    type: "proc_par",
    message0: "%1 | %2 %3",
    args0: [
      {
        type: "input_value",
        name: "P",
        check: "proc",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "Q",
        check: "proc",
      },
    ],
    inputsInline: false,
    output: "proc",
    colour: 255,
    tooltip: "process P in parallel with Q",
    helpUrl: "",
  },
  {
    type: "proc_for",
    message0: "for ( %1 %2 %3 %4 ) { %5 %6 }",
    args0: [
      {
        type: "input_value",
        name: "X",
        check: "name",
      },
      {
        type: "field_dropdown",
        name: "arrow",
        options: [
          ["<-", "FOR"],
          ["<<-", "PEEK"],
        ],
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "Y",
        check: "name",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "P",
        check: "proc",
      },
    ],
    inputsInline: true,
    output: "proc",
    colour: 230,
    tooltip: "receive x from channel y for use in process P",
    helpUrl: "",
  },
  {
    type: "name_at",
    message0: "@ %1",
    args0: [
      {
        type: "input_value",
        name: "P",
        check: "proc",
      },
    ],
    output: "name",
    colour: 230,
    tooltip: "form channel by quoting process P",
    helpUrl: "",
  },
  {
    type: "proc_send",
    message0: "%1 ! ( %2 )",
    args0: [
      {
        type: "input_value",
        name: "channel",
        check: "name",
        align: "RIGHT",
      },
      {
        type: "input_value",
        name: "process",
        check: "proc",
      },
    ],
    inputsInline: true,
    tooltip: "send on channel x the process P",
    output: null,
    colour: 230,
    helpUrl: "",
  },
  {
    type: "proc_nil",
    message0: "Nil",
    output: "proc",
    colour: 30,
    tooltip: "the stopped process",
    helpUrl: "",
  },
  {
    type: "proc_deref",
    message0: "* %1",
    args0: [
      {
        type: "input_value",
        name: "P",
        check: "name",
      },
    ],
    output: "proc",
    colour: 90,
    tooltip: "from @P get back P",
    helpUrl: "",
  },
  {
    type: "name_var",
    message0: "%1 %2",
    args0: [
      {
        type: "field_variable",
        name: "chan",
        variable: "x",
      },
      {
        type: "input_value",
        name: "ident",
      },
    ],
    output: "name",
    colour: 135,
    tooltip: "channel variable",
    helpUrl: "",
  },
  {
    type: "expr_tuple",
    message0: "( %1 %2 , %3 %4 )",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "P",
        check: "proc",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "Q",
      },
    ],
    output: "proc",
    colour: 30,
    tooltip: "tuple of P, Q, ...",
    helpUrl: "",
  },
];

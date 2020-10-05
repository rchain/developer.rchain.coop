import { RNode } from "./rnode.js";
import { RhoExpr } from "./rho-expr.js";

const helloExample = `new world in {
    world!("Hello!")
  }`;

const coreBase = new URL(
  "https://raw.githubusercontent.com/rchain/rchain/dev/rholang/examples/"
);

export const coreExamples = [
  "block-data.rho",
  "bond/bond.rho",
  "dupe.rho",
  "hello_world_again.rho",
  "longfast.rho",
  "longslow.rho",
  "performance/loop_recursive.rho",
  "shortfast.rho",
  "shortslow.rho",
  "stderrAck.rho",
  "stderr.rho",
  "stdoutAck.rho",
  "stdout.rho",
  "tut-bytearray-methods.rho",
  "tut-hash-functions.rho",
  "tut-hello-again.rho",
  "tut-hello.rho",
  "tut-lists-methods.rho",
  "tut-maps-methods.rho",
  "tut-parens.rho",
  "tut-philosophers.rho",
  "tut-prime.rho",
  "tut-rcon-or.rho",
  "tut-rcon.rho",
  "tut-registry.rho",
  "tut-sets-methods.rho",
  "tut-strings-methods.rho",
  "tut-tuples-methods.rho",
  "vault_demo/1.know_ones_revaddress.rho",
  "vault_demo/2.check_balance.rho",
  "vault_demo/3.transfer_funds.rho",
];

const pprint = (data) => JSON.stringify(data, null, 2);
const hideBlock = (elt) => {
  elt.style.display = "none";
};
const showBlock = (elt) => {
  elt.style.display = "block";
};

export function RholangForm({ $, fetch }) {
  coreExamples.forEach((ref) => {
    const elt = document.createElement("option");
    elt.textContent = ref;
    elt.value = new URL(ref, coreBase).toString();
    $('select[name="example"]').appendChild(elt);
  });

  $('select[name="example"]').addEventListener("change", (event) => {
    const value = event.target.value;
    if (value === "Hello World") {
      $("#rholang-term").value = helloExample;
      return;
    }
    const codeP = fetch(value).then((response) => {
      if (!response.ok) {
        alert(response.statusText);
        return;
      }
      response.text().then((content) => {
        $("#rholang-term").value = content;
      });
    });
  });

  async function busy(button, p) {
    $("form").style.cursor = "wait";
    button.style.cursor = "wait";
    button.disabled = true;

    try {
      const result = await p;
      return result;
    } finally {
      button.disabled = false;
      $("form").style.cursor = "inherit";
      button.style.cursor = "inherit";
    }
  }

  const node1 = new RNode(fetch).observer($('input[name="node"]').value);

  $("#run").addEventListener("click", async (event) => {
    event.preventDefault();

    const term = $("#rholang-term").value;
    hideBlock($("#resultSection"));
    $("#result").textContent = "";
    hideBlock($("#problemSection"));
    $("#problem").textContent = "";
    try {
      const { expr, block } = await busy(
        $("#run"),
        node1.exploratoryDeploy(term)
      );
      if (expr.length > 0) {
        const data = expr.map(RhoExpr.parse);
        $("#result").textContent = pprint(data);
      }
      $("#blockInfo").textContent = pprint(block);
      showBlock($("#resultSection"));
    } catch (err) {
      $("#problem").textContent = err.message;
      showBlock($("#problemSection"));
    }
  });
}

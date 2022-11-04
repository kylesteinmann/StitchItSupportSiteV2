import * as functions from "firebase-functions";



const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, phone, message } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${phone || ""}
        </li>
      </ul>
      <h4>Message</h4>
      <p>${message || ""}</p>
    </div>`;
    const msg = {
      to: "kylesteinmann@yahoo.com",
      from: "kstein@stitchitintl.com",
      subject: `${name} sent you a new message`,
      text: text,
      html: text
    };
    sgMail.setApiKey(
      "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"
    );
    sgMail.send(msg);
    res.status(200).send("success");
  }).catch(() => {
    res.status(500).send("error");
  });
});

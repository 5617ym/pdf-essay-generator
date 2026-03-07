export async function post(context, req) {

  const body = await req.json();

  const count = body.count || 5;
  const type = body.type || "essay";

  const questions = [];

  for (let i = 1; i <= count; i++) {

    if (type === "essay") {
      questions.push(`سؤال مقالي ${i}: اشرح الفكرة الرئيسية في النص.`);
    }

    else if (type === "mcq") {
      questions.push({
        question: `سؤال اختيار من متعدد ${i}`,
        options: ["أ", "ب", "ج", "د"],
        answer: "أ"
      });
    }

    else {
      questions.push(`سؤال ${i}: صف المفهوم الأساسي.`);
    }

  }

  return {
    status: 200,
    body: { questions }
  };

}

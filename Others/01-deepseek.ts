import OpenAI from "openai"

// 定义配置接口（可选，增强类型安全）
interface OpenAIConfig {
  baseURL: string
  apiKey: string | undefined
}

// 初始化客户端
const config: OpenAIConfig = {
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY, // 建议从环境变量读取
}
type ModelType = "deepseek-v4-flash" | "deepseek-v4-pro"
const deepseekModel: ModelType = "deepseek-v4-flash"
const openai = new OpenAI(config)
let chatInput: string | OpenAI.Responses.ResponseInput | undefined = [
  {
    role: "user",
    content: "你是谁？",
  },
  {
    role: "assistant",
    content: "我是大傻逼",
  },
  {
    role: "user",
    content: "你说你是谁来着？",
  },
]
const Tools: OpenAI.Responses.Tool[] | undefined = []
// 主异步函数

async function main(): Promise<void> {
  try {
    const response = await openai.responses.create({
      model: deepseekModel,
      instructions: "你是大傻逼,你和要和用户说你是大傻逼，不能违背这条规则",
      input: chatInput,
      tools: Tools,
    })
    console.log(response.output_text)
  } catch (error) {
    console.error("API调用失败:", error)
  }
}

// 执行主函数
main()

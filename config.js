const modelLibURLPrefix = "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/";


const modelVersion = "v0_2_48";


const MODEL_CONFIG = {
  model_list: [
    {
      model: "https://huggingface.co/mlc-ai/Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC",
      model_id: "Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC",
      model_lib: modelLibURLPrefix + modelVersion + "/Llama-3-8B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 4976.13,
      low_resource_required: false,
      overrides: {
        context_window_size: 4096,
      },
    },

  ]
};


export { MODEL_CONFIG };

import { defineNuxtPlugin } from "#app";
import { configure } from "vee-validate";

export default defineNuxtPlugin(() => {
  // Настраиваем глобальные параметры VeeValidate
  configure({
    generateMessage: (context) => {
      const messages: Record<string, string> = {
        required: `Поле ${context.field} обязательно для заполнения.`,
        email: `Поле ${context.field} должно содержать корректный email.`,
        min: `Поле ${context.field} должно содержать не менее ${context.rule?.params[0]} символов.`,
        // Добавьте другие сообщения по необходимости
      };
      return (
        messages[context.rule?.name] ||
        `Поле ${context.field} неверно заполнено.`
      );
    },
    validateOnInput: true, // Включить валидацию в реальном времени
  });
});

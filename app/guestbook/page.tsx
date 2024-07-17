"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

const GuestBook = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl">Livro de Visitas</h1>
          <p>
            Bem-vindo ao meu livro de visitas! Que tal deixar sua mensagem aqui?
            Seja um simples oi, uma mensagem motivacional ou uma piada, me
            surpreenda 😁
          </p>
        </div>

        <div className="relative">
          <Textarea
            minLength={2}
            maxLength={280}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Deixe sua mensagem aqui..."
          />
          <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {message.length} /280
          </span>
        </div>

        <Button disabled className="gap-2" variant={"outline"}>
          <Send size={20} /> Envio de mensagem indisponivel
        </Button>
      </div>
    </div>
  );
};
export default GuestBook;

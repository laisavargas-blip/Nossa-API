// Listar todas as frutas
router.get("/", async (req, res) => {
    try {
        const frutas = await listarFrutas();
        res.json(frutas);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar frutas" });
    }
});

// Buscar fruta pelo ID
router.get("/:id", async (req, res) => {
    try {
        const fruta = await buscarFruta(req.params.id);

        if (!fruta) {
            return res.status(404).json({ erro: "Fruta não encontrada" });
        }

        res.json(fruta);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar fruta" });
    }
});

// Criar uma nova fruta
router.post("/", async (req, res) => {
    try {
        const { nome, tipo, preco, quantidade } = req.body;

        const fruta = await criarFruta(
            nome,
            tipo,
            preco,
            quantidade
        );

        res.status(201).json(fruta);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar fruta" });
    }
});

module.exports = router;
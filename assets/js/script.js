
document.querySelector("#tipo").addEventListener("change", calcular)

function calcular(){

    const tipo = document.querySelector("#tipo").value
    if (tipo == 1) resp = "Também conhecida como Inteligência Artificial Fraca, a ANI é definida como um sistema projetado para executar tarefas específicas com alto desempenho, mas limitada a um domínio ou conjunto específico de tarefas. São popularmente desenvolvidas com algoritmos e técnicas de Machine Learning, como redes neurais, árvores de decisão, support vector machines (SVM) e outros métodos de aprendizado de máquina. Esses sistemas são treinados com grandes conjuntos de dados relevantes para a tarefa específica que devem desempenhar."
    if (tipo == 2) resp = "Definida também por Inteligência Artificial Forte, a AGI refere-se a sistemas de Inteligência Artificial que possuem uma alta especialidade em várias áreas e são capazes de executar uma ampla gama de tarefas cognitivas. Ela teria como característica fundamental sua capacidade de generalização e adaptação a diferentes domínios e contextos. A título de comparação, enquanto a IA estreita é especializada em tarefas específicas, a AGI busca alcançar um nível de inteligência mais abrangente e versátil."
    if (tipo == 3) resp = "A ASI é a mais poderosa das Inteligências Artificiais. Enquanto a AGI busca igualar ou se aproximar da inteligência humana, a ASI está além disso, superando amplamente a capacidade intelectual dos seres humanos. A SuperInteligência Artificial refere-se a um nível de inteligência que ultrapassa significativamente a capacidade cognitiva humana em todas as áreas. Esse tipo de IA se encontra no campo da teoria e não há exemplos concretos dessa forma de Inteligência Artificial atualmente. Um exemplo hipotético seria um sistema que domina uma ampla gama de domínios de conhecimento, como ciência, medicina, engenharia, arte e muito mais, e é capaz de fazer avanços significativos em todas essas áreas de maneira autônoma e contínua."

    document.querySelector("#tipoia").innerText = resp
}

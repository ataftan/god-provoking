function wrapWordsInSpans(elementId) {
      const element = document.getElementById(elementId);
      const text = element.textContent;
      const words = text.split(' ');

      const newContent = words.map(word => `<span class="word">${word}</span>`).join(' ');
      element.innerHTML = newContent;
    }

    wrapWordsInSpans('tospan');

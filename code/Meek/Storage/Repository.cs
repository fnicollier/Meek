﻿using System;
using System.Collections.Generic;

namespace Meek.Storage
{
    public interface Repository
    {
        event EventHandler<ResourceChangedArgs> FileChanged;
        event EventHandler<ResourceChangedArgs> ContentChanged;
        MeekContent Get(string route);
        bool Exists(string route);
        IEnumerable<string> AvailableRoutes(ContentTypes? type);
        void Save(string route, MeekContent content);
        void Remove(string route);
        string SaveFile(MeekFile file);
        MeekFile GetFile(string fileId);
        IDictionary<string,string> GetFiles();
        void RemoveFile(string fileId);
    }
}
